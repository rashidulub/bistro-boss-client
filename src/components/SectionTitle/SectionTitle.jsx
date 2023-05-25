
const SectionTitle = ({subHedding,hedding}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 font-bold mb-2">--- {subHedding}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{hedding}</h3>
        </div>
    );
};

export default SectionTitle;