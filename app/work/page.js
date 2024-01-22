function Box() {
  return (
    <div className="flex w-32 h-32 rounded-3xl justify-center
      items-center border-4 border-bluetheme-l3 bg-darktheme-l1
      hover:border-blue-800 select-none font-mono text-ocretheme-l2">
      Work
    </div>
  )
}


function TestComponent({ variable }) {
  return (
    <div>
      Test {variable}
    </div>
  )
}


export default function Work() {
  return (
    <div className="h-96 grid grid-cols-3 justify-items-center content-around
      bg-gradient-to-r from-gray-500 to-gray-700 text-2xl">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <TestComponent variable="blabla" />
      <TestComponent />
      <TestComponent />
    </div>
  )
}
