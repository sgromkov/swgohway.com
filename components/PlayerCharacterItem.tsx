import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import {
    CombinedCharacter,
} from '../types';

const useStyles = makeStyles((theme) => ({
    character: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "10px",
    },
    portrait: {
        width: '84px',
        height: '84px',
        position: 'relative',
    },
    image: {
        borderRadius: '50%',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
    },
    gear: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transform: 'scale(0.95)',
    },
    gear_level_1: {
        backgroundImage: 'url(/images/gear-level-frames/1.svg)',
    },
    gear_level_2: {
        backgroundImage: 'url(/images/gear-level-frames/2.svg)',
    },
    gear_level_3: {
        backgroundImage: 'url(/images/gear-level-frames/3.svg)',
    },
    gear_level_4: {
        backgroundImage: 'url(/images/gear-level-frames/4.svg)',
    },
    gear_level_5: {
        backgroundImage: 'url(/images/gear-level-frames/5.svg)',
    },
    gear_level_6: {
        backgroundImage: 'url(/images/gear-level-frames/6.svg)',
    },
    gear_level_7: {
        backgroundImage: 'url(/images/gear-level-frames/7.svg)',
    },
    gear_level_8: {
        backgroundImage: 'url(/images/gear-level-frames/8.svg)',
    },
    gear_level_9: {
        backgroundImage: 'url(/images/gear-level-frames/9.svg)',
    },
    gear_level_10: {
        backgroundImage: 'url(/images/gear-level-frames/10.svg)',
    },
    gear_level_11: {
        backgroundImage: 'url(/images/gear-level-frames/11.svg)',
    },
    gear_level_12: {
        backgroundImage: 'url(/images/gear-level-frames/12.svg)',
    },
    gear_level_13: {
        backgroundImage: 'url(/images/gear-level-frames/g13.png)',
        width: '105px',
        height: '98px',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundSize: '100%',
    },
    gear_alignment_light: {
        backgroundPosition: '0 0',
    },
    gear_alignment_dark: {
        backgroundPosition: '0 -98px',
    },
    level: {
        color: "#fff",
        fontWeight: 900,
        backgroundColor: "#264257",
        border: "2px solid #fff",
        textAlign: "center",
        borderRadius: "100%/130% 130% 15px 15px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
        textShadow: "-1px -1px 0 #000, 2px -1px 0 #000, 2px 2px 0 #000, -1px 2px 0 #000, 2px 3px 0 #000, 1px 3px 0 #000, 2px 3px 0 #000",
        width: "30px",
        padding: "05px",
        fontSize: "12px",
        position: "absolute",
        left: "50%",
        bottom: "-3px",
        transform: "translate(-50%)",
        lineHeight: 1,
    },
    stars: {},
    star: {
        position: "absolute",
        bottom: "50%",
        left: "50%",
        width: "15px",
        height: "54px",
        color: "#000",
        webkitTransformOrigin: "center bottom",
        transformOrigin: "center bottom",
        background: "center 0 transparent url(/images/badges/star.png) no-repeat",
        backgroundSize: "100%",
        zIndex: 2,
    },
    star_is_inactive: {
        backgroundImage: 'url(/images/badges/star-inactive.png)',
    },
    star_number_1: {
        transform: 'translateX(-50%) rotate(-60deg)',
    },
    star_number_2: {
        transform: 'translateX(-50%) rotate(-40deg)',
    },
    star_number_3: {
        transform: 'translateX(-50%) rotate(-20deg)',
    },
    star_number_4: {
        transform: 'translateX(-50%) rotate(0deg)',
    },
    star_number_5: {
        transform: 'translateX(-50%) rotate(20deg)',
    },
    star_number_6: {
        transform: 'translateX(-50%) rotate(40deg)',
    },
    star_number_7: {
        transform: 'translateX(-50%) rotate(60deg)',
    },
    relic: {
        position: "absolute",
        right: '-14px',
        bottom: '-2px',
        width: "44px",
        height: "44px",
        backgroundImage: "url(/images/badges/relic.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        fontWeight: 900,
        fontSize: "12px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    relic_is_legend: {
        backgroundPosition: "0 -88px",
    },
    relic_alignment_light: {},
    relic_alignment_dark: {
        backgroundPosition: "0 -44px",
    },
    zeta: {
        left: '-15px',
        color: "#fff",
        width: "40px",
        bottom: 0,
        height: "40px",
        display: "flex",
        position: "absolute",
        fontSize: "12px",
        alignItems: "center",
        fontWeight: 900,
        backgroundSize: "cover",
        justifyContent: "center",
        backgroundImage: "url(/images/badges/zeta.png)",
        backgroundRepeat: "no-repeat",
    },
    name: {
        width: "100%",
        textAlign: "center",
        fontWeight: 700,
        marginTop: "5px",
    },
}));

type PlayerCharacterItemProps = {
    character: CombinedCharacter,
};

const PlayerCharacterItem: React.FC<PlayerCharacterItemProps> = ({
    character
}) => {
    const classes = useStyles();

    const gearLevelClassModifier = classes[`gear_level_${character.player.gear_level}`];

    const gearAlignmentClassModifier = (character.player.gear_level === 13)
        ? classes[`gear_alignment_${character.default.alignment.code}`]
        : '';

    const relicClassModifier = (character.default.galacticLegend)
        ? classes[`relic_is_legend`]
        : classes[`relic_alignment_${character.default.alignment.code}`];

    return (
        <div className={classes.character}>
            <div className={classes.portrait}>
                <div className={classes.image}>
                    <Image
                        src={character.default.image}
                        width={128}
                        height={128}
                        alt={character.default.name}
                    />
                </div>
                <div className={`${classes.gear} ${gearLevelClassModifier} ${gearAlignmentClassModifier}`}></div>
                <div className={classes.level}>
                    {character.player.level}
                </div>
                <div className={`${classes.stars}`}>
                    {[1, 2, 3, 4, 5, 6, 7].map((star) => (
                        <div
                            key={star}
                            className={`${[
                                classes.star,
                                classes['star_number_' + star],
                                (character.player.rarity < star) ? classes.star_is_inactive : '',
                            ].join(' ')}`}
                        ></div>
                    ))}
                </div>
                {(character.player.relic_tier - 2 > 0) ? (
                    <div className={`${classes.relic} ${relicClassModifier}`}>
                        {character.player.relic_tier - 2}
                    </div>
                ) : ''}
                {(character.player.zeta_abilities.length > 0) ? (
                    <div className={classes.zeta}>
                        {character.player.zeta_abilities.length}
                    </div>
                ) : ''}
            </div>
            <div className={classes.name}>
                {character.default.name}
            </div>
        </div>
    );
};

export default PlayerCharacterItem;
