import Error from "next/error";
import dynamic from "next/dynamic";

export const getStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [
      {
        params: {
          slug: ["/"],
        },
      },
      {
        params: {
          slug: ["/page-a"],
        },
      },
      {
        params: {
          slug: ["/page-b"],
        },
      },
      {
        params: {
          slug: ["/page-c"],
        },
      },
    ],
  };
};

export const getStaticProps = async ({ params }) => {
  const urlPath =
    (Array.isArray(params?.slug) ? params?.slug?.join("/") : params?.slug) ??
    "page-a";

  return {
    props: {
      pageType: urlPath,
    },
    revalidate: 60,
  };
};

const PageA = dynamic(() => import("../components/PageA"));
const PageB = dynamic(() => import("../components/PageB"));
const PageC = dynamic(() => import("../components/PageC"));

const Router = ({ pageType }) => {
  switch (pageType) {
    case "page-a":
      return <PageA />;
    case "page-b":
      return <PageB />;
    case "page-c":
      return <PageC />;
  }

  return <Error statusCode={404} />;
};

export default Router;
