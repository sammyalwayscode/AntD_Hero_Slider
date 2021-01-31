import React from 'react'
// import img1 from '../Img/a.jpg'

function Components(props) {
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${props.backgroundImage})`,
        // backgroundImage: `url(${img1})`,
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
          backgroundColor: props.backgroundColor,
          // backgroundColor: 'rgba(54, 169, 212, 0.75)',
          justifyContent: props.justifyContent,
          // justifyContent: 'start',
          alignItems: props.alignItems,
          // alignItems: 'flex-end',
          padding: '0, 50px'
        }}>
          <center>
            <div style={{
              fontSize: '70px',
              margin: "50px",
              lineHeight: '0.7',
              fontWeight: 'bold',
              color: '/'
            }}>
              {props.title}
            </div>
            <div style={{
              width: '500px',
              fontSize: '40px',
              lineHeight: '1',
              textAlign: 'center',
              fontWeight: 'lighter'
            }}>
              {props.subtitle}
            </div>
          </center>
        </div>

      </div>
    </div>
  )
}

export default Components
