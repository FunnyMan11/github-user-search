import React from 'react'

function Profile(props) {
    return (
        <div>
            <article className='p-5 bg-white rounded-lg shadow shadow-emerald-300 mt-10'>
                <img src={props.owner.avatar_url} alt={props.owner.login} className='w-20 h-20 rounded-full shadow' />
                <div>
                    <h2>{props.owner.login}</h2>
                    <p>{props.name}</p>
                </div>
                <div>
                    <p className='flex justify-center bg-emerald-400 py-1 px-2 text-xs text-shadow rounded-lg inline-block'>
                        This repositories was created by {props.owner.login} 
                    </p>
                </div>
                <div>
                    <a href={props.html_url} target='_blank' >Viev repo</a>
                </div>
            </article>
        </div>
    )
}

export default Profile
