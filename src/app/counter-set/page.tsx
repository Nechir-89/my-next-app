import './style.css'

type Props = {}

export default function page({}: Props) {
  return (
    <main>
      <h3>JavaScript Textbook Chapters</h3>
      <div className='chapters'>
        <div className='chapter'>Forward</div>
        <div className='chapter'>Introduction to JavaScript (JS)</div>
        <div className='chapter'>Variables in JS</div>
        <div className='chapter'>Conditions in JS</div>
        <div className='chapter'>Loops in JS</div>
        <div className='chapter'>Conclusion</div>
      </div>
    </main>
  )
}