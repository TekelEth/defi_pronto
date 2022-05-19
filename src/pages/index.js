import Card from 'components/subcomponents/Card';
import Chart from 'components/subcomponents/Chart';
import Roadmap from 'components/subcomponents/Roadmap';
import Hero from '../components/Hero';
export default function Home() {
	return (
		<>
			<Hero />
			<div className="relative mx-12 my-12 text-white max-w-[90%]">
          <Card
            image="/assets/projects/project1.png"
            heading="Hyper Drive Metaverse"
            totalRaised="0.00"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."
          />
          <Card
            image="/assets/projects/project1.png"
            heading="Hyper Drive Metaverse"
            totalRaised={1000}
            targetAmount={2000}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."
          />
		  <Roadmap />
		  <Chart />
        </div>
		</>
	);
}
