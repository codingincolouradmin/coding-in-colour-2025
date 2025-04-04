export default function FancyText({title, text}) {
  console.log(title, text);
  return title
    ? <h1 className='fancy title'>{text}</h1>
    : <h3 className='fancy cursive'>{text}</h3>
}
