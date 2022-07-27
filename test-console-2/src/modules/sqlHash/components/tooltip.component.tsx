import {withStyles} from "@mui/styles";
import {Tooltip} from "@mui/material";

export const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f9!important',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 420,
        border: '1px solid #dadde9',

    },
}))(Tooltip);