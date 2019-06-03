import * as React from 'react';
import styles from './Footer.module.scss';

export default class Footer extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
        return <div className={styles.footer}>
            <a href="#insta">
                <img src="https://image.flaticon.com/icons/png/128/1409/1409946.png" />
            </a>
            <a href="#fb">
                <img src="https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/facebook-icon_128x128.png" />
            </a>
        </div>;
    }
}