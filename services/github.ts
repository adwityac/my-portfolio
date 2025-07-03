export const getRepos = async () => {
  try {
    // Check if token exists
    if (!process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
      console.error('GitHub token not found');
      return [];
    }

    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/vnd.github+json');
    myHeaders.append(
      'Authorization',
      `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    );
    myHeaders.append('X-GitHub-Api-Version', '2022-11-28');

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    console.log('Fetching repos from GitHub API...');

    const response = await fetch(
      'https://api.github.com/users/adwityac/repos?per_page=10&page=1&type=owner&sort=pushed&direction=desc',
      requestOptions,
    );

    // Log response status for debugging
    console.log('GitHub API Response Status:', response.status);

    if (!response.ok) {
      console.error('GitHub API Error:', response.status, response.statusText);
      return [];
    }

    const json: any = await response.json();
    console.log('Fetched repos:', json.length);

    if (json?.length > 0) {
      json.sort(
        (a: any, b: any) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      );

      const formatArr = json?.map((item: any) => ({
        id: item.id,
        name: item.name,
        updated_at: item.updated_at,
        html_url: item?.html_url,
        description: item?.description,
        topics: item?.topics,
        created_at: new Date(item?.created_at)?.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }),
      }));

      console.log('Formatted repos:', formatArr);
      return formatArr;
    }

    console.log('No repos found');
    return [];
  } catch (error) {
    console.error('Error fetching repos:', error);
    return [];
  }
};
