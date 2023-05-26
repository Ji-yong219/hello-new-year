import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: rgba(255, 255, 255, 0.7);
//   border-width: 10px;
// `

function Loading() {
  const { isLoading } = useSelector(state => state.loadingState)
  return (
    isLoading && (
      <AxiosLoading style={{ display: isLoading === true ? 'block' : 'none' }}>
        <AxiosLoadingIndicator className="axios-loading-indicator">
          <BeatLoader
            color={'white'}
            loading={isLoading}
            // css={override}
            size={40}
          />
        </AxiosLoadingIndicator>
      </AxiosLoading>
    )
  )
}

const AxiosLoading = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow: auto;
  display: block;
  position: fixed !important;
  background-color: rgba(0, 0, 0, 0.3);
`

const AxiosLoadingIndicator = styled.div`
  top: 45%;
  left: calc(50% - 75px);
  position: fixed;
`
export default Loading
