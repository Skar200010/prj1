import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './sidebar.css'

const Sidebar = (props) => {
  const [slidenumber, setSlidenumber] = useState(1)
  return (
    <div className={`sidebar-container ${props.rootClassName} `}>
      <div className="sidebar-slide1">
        <div onClick={() => setSlidenumber(3)} className="sidebar-leftbutton">
          <div onClick={() => setSlidenumber(3)} className="sidebar-container1">
            <svg viewBox="0 0 1024 1024" className="sidebar-icon">
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
          </div>
        </div>
        <div onClick={() => setSlidenumber(2)} className="sidebar-rightbutton">
          <svg viewBox="0 0 1024 1024" className="sidebar-icon02">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
        <img
          alt={props.image_alt5}
          src={props.image_src5}
          className="sidebar-image"
        />
      </div>
      <div className="sidebar-slide2">
        <div onClick={() => setSlidenumber(3)} className="sidebar-leftbutton1">
          <div className="sidebar-container2">
            <svg viewBox="0 0 1024 1024" className="sidebar-icon04">
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
          </div>
        </div>
        <div onClick={() => setSlidenumber(2)} className="sidebar-rightbutton1">
          <svg viewBox="0 0 1024 1024" className="sidebar-icon06">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
        <img
          alt={props.image_alt53}
          src={props.image_src53}
          className="sidebar-image1"
        />
      </div>
      <div className="sidebar-slide3">
        <div onClick={() => setSlidenumber(3)} className="sidebar-leftbutton2">
          <div className="sidebar-container3">
            <svg viewBox="0 0 1024 1024" className="sidebar-icon08">
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
          </div>
        </div>
        <div onClick={() => setSlidenumber(2)} className="sidebar-rightbutton2">
          <svg viewBox="0 0 1024 1024" className="sidebar-icon10">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
        <img
          alt={props.image_alt52}
          src={props.image_src52}
          className="sidebar-image2"
        />
      </div>
    </div>
  )
}

Sidebar.defaultProps = {
  image_alt51: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src51: '5b7d7bb0-8678-41a9-b7ca-617d3b29c860',
  image_alt1: 'image',
  image_alt: 'image',
  image_alt5: 'image',
  image_alt4: 'image',
  image_alt3: 'image',
  image_src53:
    'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_src52:
    'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt511: 'image',
  image_src511: 'fb391ed6-c613-4663-bd88-e13876df5e82',
  image_src2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt2: 'image',
  image_alt52: 'image',
  rootClassName: '',
  image_src4: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src3: '67a8b80d-fc53-4f66-9229-09c7e2ae8df3',
  image_alt53: 'image',
  image_src5: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
}

Sidebar.propTypes = {
  image_alt51: PropTypes.string,
  image_src: PropTypes.string,
  image_src51: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt5: PropTypes.string,
  image_alt4: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src53: PropTypes.string,
  image_src52: PropTypes.string,
  image_alt511: PropTypes.string,
  image_src511: PropTypes.string,
  image_src2: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt52: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src4: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt53: PropTypes.string,
  image_src5: PropTypes.string,
}

export default Sidebar
