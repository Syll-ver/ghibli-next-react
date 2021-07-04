import { Chip } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

const Eyes = ({ colors }) => {

    return (
        <>
            <div>dsfsdffsfdfsf
            {colors.map(color => {
                console.log(color);
                // <Chip size="small" style={{"color": {color}}} 
                // label={<VisibilityIcon/>}
                // variant="outlined"
                // />
                <Chip size="small" style={{color: `${color}`}} 
                label={<VisibilityIcon/>}
                variant="outlined"
                />
            })}
            </div>
        </>
    )
}

export default Eyes
