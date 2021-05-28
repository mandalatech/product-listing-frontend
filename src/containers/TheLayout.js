import React, { useEffect } from 'react'
import { TheContent, TheSidebar, TheFooter, TheHeader } from './index'
import { useMediaQuery } from 'react-responsive'
import store from '../store'
import {
  SET_SIDE_BAR_STATUS,
  SET_DEVICE_RESPONSIVE_INFO,
} from '../reducers/types/layout'
import { useSelector } from 'react-redux'
import Overlay from '../reusable/overlay/Overlay'

const TheLayout = props => {
  console.log(' width : ', window.innerWidth)
  const loading = useSelector(state => state.settings.topLoader)
  console.log('loading ', loading)
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 480px)',
  })

  const isTabletDevice = useMediaQuery({
    query: '(max-device-width: 768px)',
  })

  const isLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)',
  })

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1200px)',
  })

  const isBigScreen = useMediaQuery({
    query: '(min-device-width: 1201px )',
  })

  useEffect(() => {
    store.dispatch({
      type: SET_DEVICE_RESPONSIVE_INFO,
      payload: {
        isMobileDevice: isMobileDevice,
        isTabletDevice: isTabletDevice,
        isLaptop: isLaptop,
        isDesktop: isDesktop,
        isBigScreen: isBigScreen,
      },
    })
    if (isMobileDevice || isTabletDevice) {
      store.dispatch({ type: SET_SIDE_BAR_STATUS, payload: false })
    } else {
      store.dispatch({ type: SET_SIDE_BAR_STATUS, payload: true })
    }
  }, [isMobileDevice])

  return (
    <>
      {/* {loading ? <TopLoader /> : null} */}
      <div className="c-app c-default-layout">
        <TheSidebar />
        <div className="c-wrapper">
          <TheHeader />
          <div className="c-body">
            {loading ? <Overlay /> : null}

            <TheContent />
          </div>
          <TheFooter />
        </div>
      </div>
    </>
  )
}

export default TheLayout
