import exp from "node:constants";
import clsx from "clsx";

export const MenuIcon = () => {
  return(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
          </svg>
  )
}

export const CloseMenuIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
        </svg>

    )
}

export const ViewsIcon = () => {
  return (
      <svg width='24' height='24' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
      </svg>

  )
}
export const ErrorIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red"
             className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
        </svg>

    )
}

export const EyesIcon = () => {
    return (
        <svg width="82" height="65" viewBox="0 0 82 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M43.2857 32.8572C43.2857 41.3545 40.8575 49.0049 36.9827 54.5046C33.106 60.007 27.8445 63.2857 22.1429 63.2857C16.4412 63.2857 11.1797 60.007 7.30297 54.5046C3.4282 49.0049 1 41.3545 1 32.8572C1 24.3598 3.4282 16.7094 7.30297 11.2098C11.1797 5.70734 16.4412 2.42859 22.1429 2.42859C27.8445 2.42859 33.106 5.70734 36.9827 11.2098C40.8575 16.7094 43.2857 24.3598 43.2857 32.8572Z"
                fill="white" stroke="black" stroke-width="2"/>
            <path
                d="M81 31.4286C81 39.9259 78.5718 47.5763 74.697 53.076C70.8203 58.5784 65.5588 61.8571 59.8572 61.8571C54.1555 61.8571 48.894 58.5784 45.0173 53.076C41.1425 47.5763 38.7143 39.9259 38.7143 31.4286C38.7143 22.9312 41.1425 15.2808 45.0173 9.78117C48.894 4.27875 54.1555 1 59.8572 1C65.5588 1 70.8203 4.27875 74.697 9.78117C78.5718 15.2808 81 22.9312 81 31.4286Z"
                fill="white" stroke="black" stroke-width="2"/>
            <ellipse cx="25.5714" cy="45.1429" rx="8.57143" ry="12.1429" fill="black"/>
            <ellipse cx="63.2857" cy="45.1429" rx="8.57143" ry="12.1429" fill="black"/>
        </svg>

    )
}

export const SpinnerIcon = ({height, width}: {height:number, width:number}) => {
  return (
      <div className="animate-spin">
          <svg
              width={width ? width : "24"}
              height={height ? height : "24"}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                    opacity=".25"/>
              <path
                  d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                  className="spinner_ajPY"
              />
          </svg>
      </div>
  )
}

export const FunnelIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"/>
        </svg>

    )
}

export const DateIcon = () => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
           className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
      </svg>
  )
}

export const ExpandIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"/>
        </svg>


    )
}

export const ShrinkIcon = () => {
    return(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
         className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"/>
    </svg>
    )
}

export const TechnologyIcon = () => {
    return (
        <svg width='24' height='24' xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 512 512">
            <path
                d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"/>
        </svg>
    )
}

export const FashionIcon = () => {
    return (
        <svg width='24' height='24' xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 448 512">
            <path
                d="M151.2 69.7l55.9 167.7-11 33.1c-2.7 8.2-4.1 16.7-4.1 25.3V464c0 14.5 3.9 28.2 10.7 39.9C195 509 185.9 512 176 512H48c-26.5 0-48-21.5-48-48V270.5c0-9.5 2.8-18.7 8.1-26.6l47.9-71.8c5.3-7.9 8.1-17.1 8.1-26.6V128 54.3 48C64 21.5 85.5 0 112 0h4.5c.2 0 .4 0 .6 0c.4 0 .8 0 1.2 0c18.8 0 34.1 9.7 44.1 18.8C171.6 27.2 190.8 40 224 40s52.4-12.8 61.7-21.2C295.7 9.7 311 0 329.7 0c.4 0 .8 0 1.2 0c.2 0 .4 0 .6 0H336c26.5 0 48 21.5 48 48v6.3V128v17.5c0 9.5 2.8 18.7 8.1 26.6l47.9 71.8c5.3 7.9 8.1 17.1 8.1 26.6V464c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V295.8c0-5.2 .8-10.3 2.5-15.2L296.8 69.7C279.4 79.7 255.4 88 224 88s-55.4-8.3-72.8-18.3zM96 456a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM63.5 255.5c-4.7 4.7-4.7 12.3 0 17L79 288 63.5 303.5c-4.7 4.7-4.7 12.3 0 17s12.3 4.7 17 0L96 305l15.5 15.5c4.7 4.7 12.3 4.7 17 0s4.7-12.3 0-17L113 288l15.5-15.5c4.7-4.7 4.7-12.3 0-17s-12.3-4.7-17 0L96 271 80.5 255.5c-4.7-4.7-12.3-4.7-17 0zM304 280v8 32c0 8.8 7.2 16 16 16h32 8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
      </svg>

  )
}

export const TravelIcon = () => {
  return (
      <svg height='24' width='24' xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 576 512">
          <path
              d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"/>
      </svg>
  )
}

export const FoodIcon = () => {
    return (
        <svg height='24' width='24' xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 512 512">
            <path
                d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z"/>
        </svg>
    )
}

export const SportIcon = () => {
  return (
      <svg width='24' height='24' xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 512 512">
          <path
              d="M511.8 267.4c-26.1 8.7-53.4 13.8-81 15.1c9.2-105.3-31.5-204.2-103.2-272.4C434.1 41.1 512 139.5 512 256c0 3.8-.1 7.6-.2 11.4zm-3.9 34.7c-5.8 32-17.6 62-34.2 88.7c-97.5 48.5-217.7 42.6-311.9-24.5c23.7-36.2 55.4-67.7 94.5-91.8c79.9 43.2 170.1 50.8 251.6 27.6zm-236-55.5c-2.5-90.9-41.1-172.7-101.9-231.7C196.8 5.2 225.8 0 256 0c2.7 0 5.3 0 7.9 .1c90.8 60.2 145.7 167.2 134.7 282.3c-43.1-2.4-86.4-14.1-126.8-35.9zM138 28.8c20.6 18.3 38.7 39.4 53.7 62.6C95.9 136.1 30.6 220.8 7.3 316.9C2.5 297.4 0 277 0 256C0 157.2 56 71.5 138 28.8zm69.6 90.5c19.5 38.6 31 81.9 32.3 127.7C162.5 294.6 110.9 368.9 90.2 451C66 430.4 45.6 405.4 30.4 377.2c6.7-108.7 71.9-209.9 177.1-257.9zM256 512c-50.7 0-98-14.7-137.8-40.2c5.6-27 14.8-53.1 27.4-77.7C232.2 454.6 338.1 468.8 433 441c-46 44-108.3 71-177 71z"/>
      </svg>
  )
}