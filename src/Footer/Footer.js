import React,{Component} from 'react';
import INGLOGO from '../INGLOGO.png';
import { SocialIcon } from 'react-social-icons';
import { withTranslation } from 'react-i18next';

class Footer extends Component {
    render() {
    let { t } = this.props;
    return (
        <div className="pt-5">
            <div className="row" style={{ backgroundColor: "#ff6200" }}>
                <div className="col-sm-4 pt-5">
                    <img src={INGLOGO} alt="ING Banking Application" />
                </div>
                <div className="col-sm-4 text-white pt-5 text-left">
                    <b>{t('ABOUT US')}</b><br />
                    <br />
                    {t('aboutustext')}
                </div>
                <div className="col-sm-4">
                    <div className="text-white  pt-5 pb-4">
                        <b>{t('Follow US')}</b>
                        <br />
                        <br />
                        <div className="col-sm-12">
                            <SocialIcon url="http://twitter.com//ing_news?lang=en" />
                            <SocialIcon url="http://google.com/" />
                            <SocialIcon url="http://instragram.com" />
                            <SocialIcon url="http://facebook.com//ING/" />
                            <SocialIcon url="http://youtube.com//user/ing" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default withTranslation()(Footer); 