import React from 'react';

const BookingForm = ({user, onInputChange, onSubmitBooking}) => {
    const offset = new Date().getTimezoneOffset()
    const currentDate = new Date(new Date().getTime() - (offset*60*1000))
    const minDate = currentDate.toISOString().split('T')[0]
    return(
        <article className="br4 ba bg-white b--black-10 mv3 w-100 w-50-m w-30-l mw6 shadow-5 center">
            <main className="pa4 black-80">
            <div className="measure">
                <fieldset id="booking_form" className="ba b--transparent ph0 mh0">
                <legend className="f3 fw6 ph0 mh0 tc">Booking Form</legend>
                <div className="mt3 mb0 tc">
                    <label className="db fw6 f6 tc" htmlFor="service">Service</label>
                        <select className="pa2 mh2 mt1 mb1 b pl2 pr3 ba br4 bg-light-gray hover-bg-white w-80" 
                            value={user.service}
                            onChange={onInputChange}
                            name="service">
                                <option value="Gupit Supremo">Gupit Supremo</option>
                                <option value="Gupit Supremo w/ Banlaw">Gupit Supremo w/ Banlaw</option>
                                <option value="Ahit Supremo">Ahit Supremo</option>
                                <option value="Hair Tattoo">Hair Tattoo</option>
                                <option value="Supremo Espesyal">Supremo Espesyal</option>
                                <option value="Supremo Espesyal w/ Ahit">Supremo Espesyal w/ Ahit</option>
                                <option value="Linis Tenga">Linis Tenga</option>
                                <option value="Scalp Treatment">Scalp Treatment</option>
                                <option value="Perm">Perm</option>
                        </select>
                </div>
                <div className="mv2 tc">
                    <label className="db fw6 f6 tc" htmlFor="date">Date</label>
                    <input className="b pa2 mt1 mb1 ba br4 bg-light-gray hover-bg-white w-70" 
                        type="date" 
                        name="resDate"  
                        id="resDate"
                        min= {minDate}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mv2 tc">
                    <label className="db fw6 f6 tc" htmlFor="time">Time</label>
                    <input className="b pa2 mt1 ba br4 bg-light-gray hover-bg-white w-70" 
                        type="time" 
                        name="resTime"  
                        id="resTime"
                        min = "08:00"
                        max = "20:00"
                        onChange={onInputChange}
                    />
                </div>
                <div className="mt3 mb0 tc">
                    <label className="db fw6 f6 tc" htmlFor="service">Preferred Barber</label>
                        <select className="pa2 mh2 mt1 mb1 b pl2 pr3 ba br4 bg-light-gray hover-bg-white w-80" 
                            name="barber"
                            onChange={onInputChange}
                            value={user.barber}>
                                <option value="Anyone">Anyone</option>
                                <option value="Barber1">Barber 1</option>
                                <option value="Barber2">Barber 2</option>
                                <option value="Barber3">Barber 3</option>
                        </select>
                </div>
                </fieldset>
                <div className="tc mt3 mb2">
                    <input 
                    onClick={onSubmitBooking} 
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