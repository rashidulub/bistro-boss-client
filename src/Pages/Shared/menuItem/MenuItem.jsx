

const MenuItem = ({item}) => {
    const {name,recipe, price,image} =item
    return (
         
        <div className="text-center">
            <img src={image} alt="" />
            <div>
                <p>{name}</p>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;