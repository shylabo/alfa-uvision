import { projects } from '@/mock';
import HomeContent from './components/HomeContent';

export default function Home() {
  return <HomeContent projects={projects} />;
}
