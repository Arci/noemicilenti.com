import * as React from 'react';
import { FoodGalleryQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
    data: FoodGalleryQuery;
}

const Contacts: React.FC<Props> = ({ data }) => (
    <section id="social">
        <ul>
            <li className="facebook">
                <a href={data?.contact?.social?.facebook || ''} target="_blank">
                    <img src="https://noemicilenti.com/img/social/facebook.png" />
                </a>
            </li>
            <li className="youtube">
                <a href={data?.contact?.social?.youtube || ''} target="_blank">
                    <img src="https://noemicilenti.com/img/social/youtube.png" />
                </a>
            </li>
            <li className="instagram">
                <a href={data?.contact?.social?.instagram || ''} target="_blank">
                    <img src="https://noemicilenti.com/img/social/instagram.png" />
                </a>
            </li>
        </ul>
    </section>

);

export default Contacts