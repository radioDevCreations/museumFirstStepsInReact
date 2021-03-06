import './Scene.sass';


export interface SceneProps {
    path: string;
}

const Scene: React.SFC<SceneProps> = (props) => {
    const path = props.path;
    console.log(path);
    return ( 
        <>
        <div className="description">
            <h1 className="main-title">
               GREEK
            </h1>
            <h1 className="main-title">
               MUSEUM 
            </h1>
            <p className="description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum ligula non faucibus tristique. Aliquam volutpat ipsum id nisl facilisis rhoncus.
            </p>
            <button className="description-button">
            Back A Tour
            </button>
        </div>
        <div className="scene-img">
            <img className="medusa-img" src={path} alt="medusa"/>
        </div>
        </>
     );
}
 
export default Scene;