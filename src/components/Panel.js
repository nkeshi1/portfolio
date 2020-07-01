import React, {Component} from 'react';
import '../css/panel.css';

class Panel extends Component {
    changeImg = () => {

        // imgs.forEach((img, pos)=>{
        //     let imgSrc;
        //     img.addEventListener('mouseenter', ()=>{
        //         imgSrc = img.src;
        //         img.src = require(`../imgs/${hoverImgs[pos]}.png`);
        //     });
        //     img.addEventListener('mouseout', ()=>{
        //         img.src = imgSrc;
        //     });
        // });
    }
    componentDidMount(){
        const pages = ['Home', 'About', 'Services', 'Projects', 'Contact'];
        const hoverImgs = ['home_hover', 'about_hover' ,'services_hover', 'projects_hover','mail_hover'];
        let imgs = document.querySelectorAll('img');
        let pageLists = document.querySelectorAll('nav ul li');
    
        pageLists.forEach((pageList, pos)=>{
            let listText;

            pageList.setAttribute('value',pages[pos]);
            pageList.addEventListener('mouseover', ()=>{
                
                listText = pageList.innerHTML;
                //let imgSrc = imgs[pos].src;
                imgs[pos].src = require(`../imgs/${hoverImgs[pos]}.png`);
                pageList.appendChild(document.createTextNode(pages[pos]));
            });
            pageList.addEventListener('mouseout', ()=>{
                pageList.innerHTML = listText;
                //imgs[pos].src = imgSrc;
            });
            pageList.addEventListener('click',()=>{
               // pageList.(document.createTextNode(pages[pos]));
                this.props.page(pageList.getAttribute('value'));
            });
        });
    }
    render() {
        return ( 
            <div className="panel">
                <div className="logo"></div>
                <nav>
                    <ul>
                        <li><img alt="home-img" src={require('../imgs/icons8-home-32.png')}/><br/></li>
                        <li><img alt="about-img" src={require('../imgs/icons8-customer-32.png')}/><br/></li>
                        <li><img alt="service-img" src={require('../imgs/icons8-service-32.png')}/><br/></li>
                        <li><img alt="projects-img" src={require('../imgs/icons8-opened-folder-32.png')}/><br/></li>
                        <li><img alt="contact-img" src={require('../imgs/icons8-important-mail-32.png')}/><br/></li>
                    </ul>
                </nav> 
                <section className="social-icons">
                    <a title="Facebook" href="https://www.facebook.com/myaccount" className="fa fa-facebook">{}</a>
                    <a title="Twitter" href="https://www.twitter.com/myaccount" className="fa fa-twitter">{}</a>
                    <a title="GitHub" href="https://www.github.com/myaccount" className="fa fa-github">{}</a>
                    <a title="LinkedIn" href="https://www.github.com/myaccount" className="fa fa-linkedin">{}</a>
                </section>
            </div>
        );
    }
}
 
export default Panel;