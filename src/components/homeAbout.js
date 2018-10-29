import React, { Component } from 'react';

class HomeAbout extends Component {
    render() {
        return(
            <div className="homeAbout">
                <div className="homeAbout__statement">
                    What do we do?
                </div>
                <div className="homeAbout__icon">
                    <div className="homeAbout__icons">
                        <img className="Website__image" src="/assets/images/Website.jpg" />
                        <div>
                            Website 
                        </div>
                    </div>
                    <div className="homeAbout__icons">
                        <img className="IOS__image" src="/assets/images/IOS.jpg"></img>
                        <div>
                            IOS 
                        </div> 
                    </div>
                    <div className="homeAbout__icons">
                    <img className="Android__image" src="/assets/images/Android.jpg" />
                    <div>
                        Android 
                    </div>

                    </div>
                </div>
                
            </div>
        )
  }
}
export default HomeAbout;