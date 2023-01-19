import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

interface FaqProps {
    faq: string
    desc: string
}

const Faq = ({faq, desc}: FaqProps) => {
    const [showDesc, setShowDesc] = useState(false);
    console.log(desc)
    return (
    <div className="faq-tab p-4 border-2 border-[#2258A1] rounded-lg" onClick={() => setShowDesc(!showDesc)}>
        <span className="font-light">{faq}</span>
        {
            showDesc && (
                <ReactMarkdown className='font-light mt-4' children={desc}></ReactMarkdown>
            )
        }
    </div>
  )
}

export default Faq