import React, { useState, useEffect } from 'react'
import './../assets/styles/components/Player.scss'
import { useNavigate, useParams } from "react-router-dom";
import { connect } from 'react-redux'
import { getVideoSource } from './../actions/index'

function Players(props) {
    const [loading, setLoading]=useState(false)
    const navigate = useNavigate()
    let { id } = useParams();


    useEffect(() => {
        props.getVideoSource(id)
        setLoading(true)
    }, [])


    return (
        loading?
            < div className='player' >   
                 <video constrols autoPlay>   
                    <source src={props.playing.source} type="video/mp4" />
                </video>
                <div className='player-back'>
                    <button className='button' onClick={() => navigate(-1)}>
                        Regresar
                    </button>
    
                </div>
            </div>:<div className='loading'><h1>Loading...</h1></div>
     
            


    )
}

const mapStateToProps = state => {
    return {
        playing: state.playing
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Players)
