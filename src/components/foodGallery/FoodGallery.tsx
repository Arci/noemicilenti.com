import { GridList, GridListTile } from '@material-ui/core';
import * as React from 'react';
import { FoodGalleryQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
    data: FoodGalleryQuery;
}

const className = 'FoodGallery';
const FoodGallery: React.FC<Props> = ({ data }) => (
    <div>
        <GridList cellHeight={160} className={`${className}__list`} cols={3}>
            {data.food?.gallery?.photos?.map((photo, i) => (
                <GridListTile key={i} cols={1}>
                    <img src={photo?.url} alt={photo?.alternativeText || ""} />
                </GridListTile>
            ))}
        </GridList>
        <div>
            <ol>{data.contact?.email}</ol>
            <ol>{data.contact?.phone}</ol>
            <ol>{data.contact?.social?.facebook}</ol>
            <ol>{data.contact?.social?.instagram}</ol>
            <ol>{data.contact?.social?.vogue}</ol>
        </div>
    </div>
);

export default FoodGallery