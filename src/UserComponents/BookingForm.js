import React from 'react';

const BookingForm = ({onInputChange}) => {
    return(
        <article className="br4 ba bg-white b--black-10 mv4 w-100 w-50-m w-30-l mw6 shadow-5 center">
            <main className="pa4 black-80">
            <div className="measure">
                <fieldset id="booking_form" className="ba b--transparent ph0 mh0">
                <legend className="f3 fw6 ph0 mh0 tc">Booking Form</legend>
                <div className="mt3 mb0 tc">
                    <label className="db fw6 f6 tc" htmlFor="service">Service</label>
                        <select className="pa2 mh2 mt1 mb1 b pl2 pr3 ba br4 bg-light-gray hover-bg-white w-80" 
                            // value={this.state.gender}
                            onChange={onInputChange}>
                                <option value="gupit supremo">Gupit Supremo</option>
                                <option value="gupit supremo w/ banlaw">Gupit Supremo w/ Banlaw</option>
                                <option value="ahit supremo">Ahit Supremo</option>
                                <option value="hair tattoo">Hair Tattoo</option>
                                <option value="supremo espesyal">Supremo Espesyal</option>
                                <option value="supremo espesyal w/ ahit">Supremo Espesyal w/ Ahit</option>
                                <option value="linis tenga">Linis Tenga</option>
                                <option value="scalp treatment">Scalp Treatment</option>
                                <option value="perm">Perm</option>
                        </select>
                </div>
                <div className="mv2 tc">
                    <label className="db fw6 f6 tc" htmlFor="date">Date</label>
                    <input className="b pa2 mt1 mb1 ba br4 bg-light-gray hover-bg-white w-70" 
                        type="date" 
                        name="date"  
                        id="date"
                        onChange={onInputChange}
                    />
                </div>
                <div className="mv2 tc">
                    <label className="db fw6 f6 tc" htmlFor="time">Time</label>
                    <input className="b pa2 mt1 ba br4 bg-light-gray hover-bg-white w-70" 
                        type="time" 
                        name="time"  
                        id="time"
                        onChange={onInputChange}
                    />
                </div>
                <div className="mt3 mb0 tc">
                    <label className="db fw6 f6 tc" htmlFor="service">Preferred Barber</label>
                        <select className="pa2 mh2 mt1 mb1 b pl2 pr3 ba br4 bg-light-gray hover-bg-white w-80" 
                            // value={this.state.gender}
                            onChange={onInputChange}>
                                <option value="anyone">Anyone</option>
                                <option value="barber1">Barber 1</option>
                                <option value="barber2">Barber 2</option>
                                <option value="barber3">Barber 3</option>
                        </select>
                </div>
                </fieldset>
                <div className="tc mt3 mb2">
                    <input 
                    // onClick={this.onSubmitSignIn} 
                    className="white ph4 pv2 input-reset ba br4 b--black bg-black grow pointer f6 dib" 
                    type="submit" 
                    value="Book Now"/>
                </div>
            </div>
            </main>
        </article>
    );
}

export default BookingForm;