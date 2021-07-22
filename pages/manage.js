import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';

import NavBar from '../components/NavBar';

const RecipesQuery = gql`
  query RecipesQuery {
    recipes {
      name
      description
    }
  }
`;

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`;

const Manage = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery(RecipesQuery);
  const { viewerData, loading2, error2 } = useQuery(ViewerQuery);
  if (error) {
    return <p>{error.message}</p>;
  }

  if (data) {
    return (
      <>
        <NavBar />
        <div>
          <Link href="/">
            <a>home</a>
          </Link>
          <Link href="/about">
            <a>about</a>
          </Link>
          <Link href="/signout">
            <a>signout</a>
          </Link>
        </div>
        <h3>{`Hey ${viewerData?.email}`}</h3>
        <div>
          {data?.recipes?.map((recipe) => {
            <>
              <div>{recipe.name}</div>
              <div>{recipe.description}</div>
            </>;
          })}
        </div>
      </>
    );
  }

  return <p>Loading...</p>;
};

export default Manage;
