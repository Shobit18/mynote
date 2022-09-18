import React from 'react'
// import {Icon} from 'react-icons-kit'
// import {trash} from 'react-icons-kit/feather/trash'
 type Person ={
 books: any,
 deleteBook: any
}

export const View = ({books, deleteBook}: Person) => {
    
    return books.map((book: any)=>(
        
        <tr key={book.isbn}>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td className='delete-btn' onClick={()=>deleteBook(book.isbn)}>
                {/* <Icon icon={trash}/> */}
            </td>           
        </tr>            
    
))
}