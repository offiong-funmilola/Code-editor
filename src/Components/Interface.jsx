import React from 'react'
import Editor from '@monaco-editor/react';
import {useState, useRef, useEffect, useContext} from 'react'
import {FaPlay} from 'react-icons/fa'
import InterfaceContext from './Context/InterfaceContext';

const options = {
    autoIndent: 'full',
    contextmenu: true,
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
    minimap: {
      enabled: true,
    },
    scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true,
  }; 

function Interface() {
   
    const {setValue} = useContext(InterfaceContext)
    const [file, setFile] = useState('');
    const [myLang, setMyLang] = useState('js')
    const [show, setShow] = useState(false);
    const [code, setCode] = useState('')
    const [fileName, setFileName] = useState('')
    const [name, setName] = useState('')
    
    const editorRef = useRef(null)

    const editorDidMount = (editor, monaco) => {
        editorRef.current = editor 
    }

    const handleClick = () => {
        setShow(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (fileName) {
            let newLanguage = 'javascript'
            const extension = fileName.split('.').pop();
            if (['css', 'html', 'python', 'dart', 'typecript', 'json'].includes(extension)) {
                newLanguage = extension;
            }
            else if (extension === 'md') {
                newLanguage='markdown';
            }
            setMyLang(newLanguage);
            setName(fileName)
        }   
        setShow(false)
        setFileName('')
    }

    const handleFileChange = (e) => {
        if (e.target.files){
            setFile(e.target.files[0])
        };
        
    }

    const showValue = () => {
        alert(editorRef.current.getValue())
        setValue(editorRef.current.getValue())
    }

    // function handleEditorChange(value, event) {
    //     setValue(value)
    //     // console.log('here is the current model value:', value);
    //   }

    useEffect(() => {
        const subscribe = () => {
            if (file) {
                var reader = new FileReader();
                reader.onload = async (e) => {
                    setCode(e.target.result);
                };
                reader.readAsText(file);
                let newLanguage = 'javascript'
                const extension = file.name.split('.').pop();
                if (['css', 'html', 'python', 'dart', 'typescript', 'json'].includes(extension)) {
                    newLanguage = extension;
                }
                else if (extension === 'md') {
                    newLanguage='markdown';
                }
                setMyLang(newLanguage);
                setName(file.name)
            }   
        }
        return () => subscribe
    },[file])

   
  return (
    <div className='w-1/2 h-[100vh]'>
        <div className="navbar h-[10vh] bg-gray-200 mb-2 gap-2">
                <p className="btn btn-ghost normal-case text-xl">{name ? name: 'untitiled'}</p>
                <button type='button' onClick={handleClick}>New File</button>
                <div>
                    <input type='file' placeholder='choose a file' onChange={(e)=>handleFileChange(e)}/>
                </div>
                <div className='w-8 h-9 justify-self-end'>
                    <FaPlay onClick={showValue}/>
                </div>
            </div>
        {show && 
            <div>
                <form onSubmit={handleSubmit} className='w-full flex h-10 gap-5 px-5'>
                    <div className='w-3/4'>
                        <label className='mr-5'>New File</label>
                        <input type='text' value={fileName} onChange={(e) => {setFileName(e.target.value)}} className='w-1/2 p-2 border border-gray-200 focus:outline-none'/>
                    </div>
                    <button type='submit'>Create new file</button>
                    
                </form>
            </div>
            
        }
        {!show && 
            <Editor 
                width= '100%'
                height= '90%'
                options= {options}
                theme= 'myLang-theme'
                path= {name}
                defaultLanguage= {myLang}
                defaultValue= {code}
                onMount = {editorDidMount} 
            />
        }    
    </div>
  )
}

export default Interface