interface BlogPostProps {
  params: {
    slug: string;
  };
}

async function fetchPost(slug: string) {
  // Replace with your backend or CMS API call
  return {
    title: `Blog Post: ${slug}`,
    content: `This is a detailed content for post "${slug}"...`,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await fetchPost(params.slug);

  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <article>{post.content}</article>
    </main>
  );
}
