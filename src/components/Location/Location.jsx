import Container from "../Container/Container";
import "../Location/Location.css"


const Location = () => {
    return (
        <div id="location-part">
            <Container>
                <div className="location-main grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                    <div className="item1 h-[200px] bg-green-500 rounded-md" >
                        
                        </div>
                        <div className="item2 h-[200px] bg-orange-500"></div>
                        <div className="item3 h-[200px] bg-green-500"></div>
                </div>
            </Container>
        </div>
    );
};

export default Location;