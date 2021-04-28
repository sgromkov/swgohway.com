import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'flex-end'
    },
    formControl: {
        minWidth: '180px'
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

function FeatureSelect({ features, onChange }) {
    const classes = useStyles();

    const [currentFeatures, setCurrentFeatures] = React.useState([]);

    const handleChange = (event) => {
        const featureCodes = event.target.value;

        setCurrentFeatures(featureCodes);

        onChange(featureCodes);
    };

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl} variant="outlined" size="small">
                <InputLabel id="feature-select-label">Features</InputLabel>
                <Select
                    multiple
                    labelId="feature-select-label"
                    id="feature-select"
                    label="Features"
                    value={currentFeatures}
                    onChange={handleChange}
                    renderValue={(selected) => (
                        <div className={classes.chips}>
                            {selected.map((value) => (
                                <Chip
                                    size="small"
                                    label={value}
                                    key={value}
                                ></Chip>
                            ))}
                        </div>
                    )}
                >
                    {features.map((feature) => (
                        <MenuItem key={feature.code} value={feature.code}>
                            <Checkbox checked={currentFeatures.indexOf(feature.code) > -1} size="small" />
                            <ListItemText primary={feature.title} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default FeatureSelect;
