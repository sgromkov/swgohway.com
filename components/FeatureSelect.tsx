import React from 'react';
import {
    FormHelperText,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Checkbox,
    ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomChip from './CustomChip';
import getItemTitleByCode from '../utilities/getItemTitleByCode';
import { SelectOption } from '../types';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'flex-end'
    },
    formControl: {
        flexGrow: 1,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

type FeatureSelectProps = {
    features: SelectOption[],
    onChange(featureCodes: string[]): void,
};

const FeatureSelect: React.FC<FeatureSelectProps> = ({ features, onChange }) => {
    const classes = useStyles();

    const [currentFeatures, setCurrentFeatures] = React.useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const featureCodes = event.target.value as string[];

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
                    renderValue={(selected: string[]) => (
                        <div className={classes.chips}>
                            {selected.map((value: string) => (
                                <CustomChip
                                    size="small"
                                    label={getItemTitleByCode(value, features)}
                                    key={value}
                                />
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
                <FormHelperText>Will show the characters that have all selected features.</FormHelperText>
            </FormControl>
        </div>
    );
};

export default FeatureSelect;
