import React from 'react';
import Post from './PostItem';

const posts = [
    {
      id: 1,
      title: 'Amet consectetur adipisicing elit',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas, tenetur vero quia voluptate officia similique voluptates maxime, cupiditate dolorem!',
      created_at: new Date('22/07/2020'),
      user: {
        id: 356,
        name: '@lucas',
        url: 'lucasfpacheco',
        url_picture: 'https://picsum.photos/300/300?random=1',
      },
      like_count: 25,
      comments: [
        {
          id: 321456,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@marcio',
            url: 'marciopereira',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321457,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@juliano',
            url: 'juliano',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321458,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@crys',
            url: 'crysfreitas',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321459,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@julia',
            url: 'julpolski',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
  
      ]
    },
    {
      id: 2,
      title: 'Amet consectetur adipisicing elit',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas, tenetur vero quia voluptate officia similique voluptates maxime, cupiditate dolorem!',
      created_at: new Date('22/07/2020'),
      user: {
        id: 356,
        name: '@lucas',
        url: 'lucasfpacheco',
        url_picture: 'https://picsum.photos/300/300?random=1',
      },
      like_count: 25,
      comments: [
        {
          id: 321456,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@marcio',
            url: 'marciopereira',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321457,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@juliano',
            url: 'juliano',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321458,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@crys',
            url: 'crysfreitas',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321459,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@julia',
            url: 'julpolski',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
  
      ]
    },
    {
      id: 3,
      title: 'Amet consectetur adipisicing elit',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas, tenetur vero quia voluptate officia similique voluptates maxime, cupiditate dolorem!',
      created_at: new Date('22/07/2020'),
      user: {
        id: 356,
        name: '@lucas',
        url: 'lucasfpacheco',
        url_picture: 'https://picsum.photos/300/300?random=1',
      },
      like_count: 25,
      comments: [
        {
          id: 321456,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@marcio',
            url: 'marciopereira',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321457,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@juliano',
            url: 'juliano',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321458,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@crys',
            url: 'crysfreitas',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321459,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@julia',
            url: 'julpolski',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
  
      ]
    },
    {
      id: 4,
      title: 'Amet consectetur adipisicing elit',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas, tenetur vero quia voluptate officia similique voluptates maxime, cupiditate dolorem!',
      created_at: new Date('22/07/2020'),
      user: {
        id: 356,
        name: '@lucas',
        url: 'lucasfpacheco',
        url_picture: 'https://picsum.photos/300/300?random=1',
      },
      like_count: 25,
      comments: [
        {
          id: 321456,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@marcio',
            url: 'marciopereira',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321457,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@juliano',
            url: 'juliano',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321458,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@crys',
            url: 'crysfreitas',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321459,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@julia',
            url: 'julpolski',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
  
      ]
    },
    {
      id: 5,
      title: 'Amet consectetur adipisicing elit',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas, tenetur vero quia voluptate officia similique voluptates maxime, cupiditate dolorem!',
      created_at: new Date('22/07/2020'),
      user: {
        id: 356,
        name: '@lucas',
        url: 'lucasfpacheco',
        url_picture: 'https://picsum.photos/300/300?random=1',
      },
      like_count: 25,
      comments: [
        {
          id: 321456,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@marcio',
            url: 'marciopereira',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321457,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@juliano',
            url: 'juliano',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321458,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@crys',
            url: 'crysfreitas',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321459,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@julia',
            url: 'julpolski',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
  
      ]
    },
    {
      id: 6,
      title: 'Amet consectetur adipisicing elit',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas, tenetur vero quia voluptate officia similique voluptates maxime, cupiditate dolorem!',
      created_at: new Date('22/07/2020'),
      user: {
        id: 356,
        name: '@lucas',
        url: 'lucasfpacheco',
        url_picture: 'https://picsum.photos/300/300?random=1',
      },
      like_count: 25,
      comments: [
        {
          id: 321456,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@marcio',
            url: 'marciopereira',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321457,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@juliano',
            url: 'juliano',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321458,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@crys',
            url: 'crysfreitas',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321459,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@julia',
            url: 'julpolski',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
  
      ]
    },
    {
      id: 7,
      title: 'Amet consectetur adipisicing elit',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas, tenetur vero quia voluptate officia similique voluptates maxime, cupiditate dolorem!',
      created_at: new Date('22/07/2020'),
      user: {
        id: 356,
        name: '@lucas',
        url: 'lucasfpacheco',
        url_picture: 'https://picsum.photos/300/300?random=1',
      },
      like_count: 25,
      comments: [
        {
          id: 321456,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@marcio',
            url: 'marciopereira',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321457,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@juliano',
            url: 'juliano',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321458,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@crys',
            url: 'crysfreitas',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321459,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@julia',
            url: 'julpolski',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
  
      ]
    },
    {
      id: 8,
      title: 'Amet consectetur adipisicing elit',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas, tenetur vero quia voluptate officia similique voluptates maxime, cupiditate dolorem!',
      created_at: new Date('22/07/2020'),
      user: {
        id: 356,
        name: '@lucas',
        url: 'lucasfpacheco',
        url_picture: 'https://picsum.photos/300/300?random=1',
      },
      like_count: 25,
      comments: [
        {
          id: 321456,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@marcio',
            url: 'marciopereira',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321457,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@juliano',
            url: 'juliano',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321458,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@crys',
            url: 'crysfreitas',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321459,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@julia',
            url: 'julpolski',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
  
      ]
    },
    {
      id: 9,
      title: 'Amet consectetur adipisicing elit',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas, tenetur vero quia voluptate officia similique voluptates maxime, cupiditate dolorem!',
      created_at: new Date('22/07/2020'),
      user: {
        id: 356,
        name: '@lucas',
        url: 'lucasfpacheco',
        url_picture: 'https://picsum.photos/300/300?random=1',
      },
      like_count: 25,
      comments: [
        {
          id: 321456,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@marcio',
            url: 'marciopereira',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321457,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@juliano',
            url: 'juliano',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321458,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@crys',
            url: 'crysfreitas',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321459,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@julia',
            url: 'julpolski',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
  
      ]
    },
    {
      id: 10,
      title: 'Amet consectetur adipisicing elit',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas, tenetur vero quia voluptate officia similique voluptates maxime, cupiditate dolorem!',
      created_at: new Date('22/07/2020'),
      user: {
        id: 356,
        name: '@lucas',
        url: 'lucasfpacheco',
        url_picture: 'https://picsum.photos/300/300?random=1',
      },
      like_count: 25,
      comments: [
        {
          id: 321456,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@marcio',
            url: 'marciopereira',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321457,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@juliano',
            url: 'juliano',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321458,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@crys',
            url: 'crysfreitas',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321459,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@julia',
            url: 'julpolski',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
  
      ]
    },
    {
      id: 11,
      title: 'Amet consectetur adipisicing elit',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas, tenetur vero quia voluptate officia similique voluptates maxime, cupiditate dolorem!',
      created_at: new Date('22/07/2020'),
      user: {
        id: 356,
        name: '@lucas',
        url: 'lucasfpacheco',
        url_picture: 'https://picsum.photos/300/300?random=1',
      },
      like_count: 25,
      comments: [
        {
          id: 321456,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@marcio',
            url: 'marciopereira',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321457,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@juliano',
            url: 'juliano',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321458,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@crys',
            url: 'crysfreitas',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321459,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@julia',
            url: 'julpolski',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
  
      ]
    },
    {
      id: 13,
      title: 'Amet consectetur adipisicing elit',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas, tenetur vero quia voluptate officia similique voluptates maxime, cupiditate dolorem!',
      created_at: new Date('22/07/2020'),
      user: {
        id: 356,
        name: '@lucas',
        url: 'lucasfpacheco',
        url_picture: 'https://picsum.photos/300/300?random=1',
      },
      like_count: 25,
      comments: [
        {
          id: 321456,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@marcio',
            url: 'marciopereira',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321457,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@juliano',
            url: 'juliano',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321458,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@crys',
            url: 'crysfreitas',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
        {
          id: 321459,
          post_id: 1,
          content: 'A fuga deleniti dicta exercitationem tempore blanditiis molestias quod, magni beatae voluptas',
          user: {
            id: 789,
            name: '@julia',
            url: 'julpolski',
            url_picture: 'https://picsum.photos/300/300?random=1',
          },
        },
  
      ]
    },
  ]
  
function PostList() {

  return (
        <>
            <div className="posts_container">
                {posts.length > 0 && posts.map(post => {
                    return (
                        <Post key={post.id} post={post} />
                    )
                })}
            </div>
        </>
  );
}

export default PostList;