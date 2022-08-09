import {AdminLayout} from '@/components/shared/layout/';
import {useAppSelector} from '@/store/hooks';
import {selectTest} from '@/store/features/test';
import {PageLoader} from '@/components/shared/pageloader';

const Home = () => {
  const {data, loading} = useAppSelector((state) => selectTest(state));

  if (loading) {
    return <PageLoader />;
  }

  return (
    <AdminLayout pageTitle={`Home`}>
      <h1>Home</h1>
    </AdminLayout>
  );
};

export default Home;
