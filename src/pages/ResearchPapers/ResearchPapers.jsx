import img1 from '../../images/researchPaper/1.png';
import img2 from '../../images/researchPaper/2.jpeg';
import img3 from '../../images/researchPaper/3.jpeg';
import PaperCard from './PaperCard';

const ResearchPapers = () => {

    const fakeResearchPapers = [
        {
            id: 1,
            title: 'New dissertation demonstrates how AI can learn to make effective decisions through reinforcement learning and reward systems',
            details: 'In a new dissertation in mathematics, Björn Lindenberg shows how reinforcement learning in AI can be used to create effective strategies for autonomous decision-making in various environments. Reward systems can be developed to reinforce correct behaviour, such as finding optimal pricing strategies for financial instruments or controlling robots and network traffic....',
            link: 'https://lnu.se/en/meet-linnaeus-university/current/news/2023/new-dissertation-demonstrates-how-ai-can-learn-to-make-effective-decisions-through-reinforcement-learning-and-reward-systems/',
            image: img1,
        },
        {
            id: 2,
            title: 'Researchers wish to promote well-being among young girls in sports',
            details: 'There are many things happening in the body of teenage girls. Anna Melin is leading a new research project that includes short educational films covering topics related to the biological, psychological and social challenges for young female engaged in organised sports. The aim is to promote the well-being of the girls and to increase their commitment within sports....',
            link: 'https://lnu.se/en/meet-linnaeus-university/current/news/2023/researchers-wish-to-promote-well-being-among-young-girls-in-sports/',
            image: img2,
        },
        {
            id: 3,
            title: "Everyday interaction in pre-school is important for multilingual children's language development",
            details: "For multilingual children's language development, everyday practical interactions are important, according to pre-school teachers. The interactions also increase the teachers' own knowledge and influence their professional identity, a new research study from Linnaeus University shows....",
            link: 'https://lnu.se/en/meet-linnaeus-university/current/news/2023/everyday-interaction-in-pre-school-is-important-for-multilingual-childrens-language-development/',
            image: img3,
        },
    ];

    return (
        <section className="bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1] py-20">
            <div className="text-center space-y-2 mb-8">
                <h6 className="uppercase text-[#E80040]">Research Categories</h6>
                <h3 className="text-3xl font-semibold">Students Research Paper</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {fakeResearchPapers.map((paper) => (
                    <PaperCard key={paper.id} paper={paper} />
                ))}
            </div>
        </section >
    );
};

export default ResearchPapers;