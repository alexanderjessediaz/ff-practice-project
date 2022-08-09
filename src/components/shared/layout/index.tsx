import Head from "next/head";

type LayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
};

export const AdminLayout = (props: LayoutProps) => {
  const { pageTitle, children } = props;
  return (
    <>
      <Head>
        <title>{pageTitle} | vABi</title>
      </Head>
      <div className="min-h-screen bg-gray-100">
        <div className="mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="block h-16 w-auto mt-2" src="/logo.jpg" alt="vABi" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <header>
            <div className="mx-auto px-4 sm:px-6 lg:px-10">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">{pageTitle}</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};
