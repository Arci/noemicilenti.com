import * as React from 'react';
import { FoodGalleryQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
    data: FoodGalleryQuery;
}

const className = 'FoodGallery';
const FoodGallery: React.FC<Props> = ({ data }) => (
    <div>
        <div className={`${className}__list`}>
            {data.food?.gallery?.photos?.map(
                (photo, i) => <img src={photo?.url} key={i} className={`${className}__item`} />
            )}
        </div>
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