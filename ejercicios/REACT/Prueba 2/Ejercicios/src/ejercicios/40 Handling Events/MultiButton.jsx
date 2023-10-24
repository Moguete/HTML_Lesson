import React from 'react'

const MultiButton = () => {
    function handleMultiButton(e) {
        console.log(e.currentTarget.name);
      }
  return (
    <div>
        <button name='one' onClick={handleMultiButton}>ONE</button>
        <button name='two' onClick={handleMultiButton}>TWO</button>
        <button name='three' onClick={handleMultiButton}>THREE</button>
    </div>
  )
}

export default MultiButton