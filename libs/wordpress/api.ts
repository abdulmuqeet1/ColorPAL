/// first 4 posts
export const ALL_POSTS = `query AllPosts{
  posts(first: 4, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      id
      date
      title
      slug
      excerpt
    }
  }
}`;

// get all the slug for static path and static generation
export const GET_ALL_SLUGS = `query AllPosts{
  posts(first: 4, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      id
      slug
    }
  }
}`;

// post by slug
export const POST_BY_SLUG = `query PostbySlug($id: ID!) {
  post(id: $id, idType: SLUG, asPreview: true) {
    id
    slug
    date
    title
    content
    featuredImage {
      node {
        altText
      }
    }
  }
}
`;

// earbuds posts
const ALL_EB_POSTS = `query MyQuery {
  posts {
    nodes {
      id
      title
      slug
      tags {
        edges {
          node {
            id
          }
        }
      }
      date
      content
      author {
        node {
          id
        }
      }
      categories {
        edges {
          node {
            id
          }
        }
      }
    }
  }
}
`;

// first earbuds post
export const EB_POST_INFO = `query MyQuery {
  posts(first: 10, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      id
      title
      slug
      date
    }
  }
}
`;
// first 4 earbuds posts
export const EB_POSTS = `query MyQuery {
  posts(first: 10, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      id
      title
      slug
      date
      content
      
    }
  }
}
`;

// get all the slug for static path and static generation
export const GET_ALL_EB_SLUGS = `query AllPosts{
  posts(first: 10, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      id
      slug
    }
  }
}`;

// post by slug
export const EB_POST_BY_SLUG = `query PostbySlug($id: ID!) {
  post(id: $id, idType: SLUG, asPreview: false) {
    id
    slug
    date
    title
    content

  }
}
`;
