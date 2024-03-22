import React from 'react'
import facebookImage from '../images/icon-facebook.svg';
import twitterImage from '../images/icon-twitter.svg';
import instagramImage from '../images/icon-instagram.svg';
import youtubeImage from '../images/icon-youtube.svg';
import upImage from '../images/icon-up.svg';
import downImage from '../images/icon-down.svg';
import { useState, useEffect } from 'react';

const DashboardComponent = () => {

    const [theme, setTheme] = useState<string>('light');
        useEffect(() => {
        document.body.className = theme;
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

  return (
    <div className='min-h-screen dark:bg-gray-900'>
<div className='container mx-auto px-4 md:px-0'>
    <div className='flex flex-col md:flex-row justify-between container m-auto pt-8'>
        <div>
            <h1 className='font-bold text-3xl text-left dark:text-white'>Social Media Dashboard</h1>
            <p className='font-bold text-left text-color dark:text-gray-400'>Total Followers: 23,004</p>
        </div>
        <div className="w-full md:w-auto border-t border-gray-600 mt-4 md:mt-0 md:border-t-0"></div>
        <div className="flex justify-between items-center  mr-4 md:w-auto mt-4 md:mt-0">
            <span className="text-gray-500 dark:text-gray-400 mr-4 text-sm font-bold">Dark Mode</span>
            <label htmlFor="toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" checked={theme === 'light'} onChange={toggleTheme} id="toggle" className="sr-only peer" />
              <div className="w-12 h-6 bg-gray-400 dark:bg-gradient-to-r dark:from-indigo-400 dark:to-green-500 hover:bg-gradient-to-r hover:from-teal-400 hover:to-lime-500 rounded-full peer"></div>
              <span className="m-1 absolute left-0 inline-block w-5 h-5 bg-white dark:bg-gray-800 border-gray-300 rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5 peer-checked:border-blue-600"></span>
            </label>
          </div>
    </div>


    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-16'>
        <div className='border-solid border-t-8 rounded-md top-card p-8 space-y-4 dark:bg-gray-800 dark:hover:bg-customColor facebook-card'>
            <div className='flex justify-center gap-2 items-center'>
                <img className='h-6' src={facebookImage} alt="" />
                <p className='font-bold accountName dark:text-gray-400'>@nathanf</p>
            </div>
            <div>
                <h1 className='text-6xl font-bold text-center dark:text-white'>1987</h1>
                <p className='FOLLOWERS text-center dark:text-gray-400'>F O L L O W E R S</p>
            </div>
            <div className='flex justify-center gap-2 items-center'>
                <img className='h-1 w-2' src={upImage} alt="" />
                <p className='upGreen'>12 Today</p>
            </div>
        </div>
        <div className='border-solid border-t-8 rounded-md top-card p-8 space-y-4 dark:bg-gray-800 dark:hover:bg-customColor twitter-card'>
            <div className='flex justify-center gap-2 items-center'>
                <img className='h-6' src={twitterImage} alt="" />
                <p className='font-bold accountName dark:text-gray-400'>@nathanf</p>
            </div>
            <div>
                <h1 className='text-6xl font-bold text-center dark:text-white'>1044</h1>
                <p className='FOLLOWERS text-center dark:text-gray-400'>F O L L O W E R S</p>
            </div>
            <div className='flex justify-center gap-2 items-center'>
                <img className='h-1 w-2' src={upImage} alt="" />
                <p className='upGreen'>99 Today</p>
            </div>
        </div>
        <div className='border-solid border-t-8 rounded-md top-card p-8 space-y-4 dark:bg-gray-800 dark:hover:bg-customColor instagram-card'>
            <div className='flex justify-center gap-2 items-center'>
                <img className='h-6' src={instagramImage} alt="" />
                <p className='font-bold accountName dark:text-gray-400'>@realnathanf</p>
            </div>
            <div>
                <h1 className='text-6xl font-bold text-center dark:text-white'>11k</h1>
                <p className='FOLLOWERS text-center dark:text-gray-400'>F O L L O W E R S</p>
            </div>
            <div className='flex justify-center gap-2 items-center'>
                <img className='h-1 w-2' src={upImage} alt="" />
                <p className='upGreen'>1099 Today</p>
            </div>
        </div>
        <div className='border-solid border-t-8 rounded-md top-card p-8 space-y-4 dark:bg-gray-800 dark:hover:bg-customColor youtube-card'>
            <div className='flex justify-center gap-2 items-center'>
                <img className='h-6' src={youtubeImage} alt="" />
                <p className='font-bold accountName dark:text-gray-400'>Nathan F.</p>
            </div>
            <div>
                <h1 className='text-6xl font-bold text-center dark:text-white'>8239</h1>
                <p className='FOLLOWERS text-center dark:text-gray-400'>S U B S C R I B E R S</p>
            </div>
            <div className='flex justify-center gap-2 items-center'>
                <img className='h-1 w-2' src={downImage} alt="" />
                <p className='downRed'>144 Today</p>
            </div>
        </div>
    </div>

    <div className='font-bold text-left mt-16 mb-6 text-2xl text-color dark:text-gray-200'>Overview - Today</div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className='rounded-md top-card p-8 space-y-4 dark:bg-gray-800'>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-color  dark:text-gray-400'>Page Views</p>
                <img className='h-6' src={facebookImage} alt="" />
            </div>
            <div className='flex justify-between'>
                <p className='font-bold text-5xl dark:text-white'>87</p>
                <div className='flex justify-end items-center gap-1'>
                    <img className='h-1 w-2' src={upImage} alt="" />
                    <p className='upGreen'>3%</p>
                </div>
            </div>
        </div>
        <div className='rounded-md top-card p-8 space-y-4 dark:bg-gray-800'>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-color  dark:text-gray-400'>Page Views</p>
                <img className='h-6' src={facebookImage} alt="" />
            </div>
            <div className='flex justify-between'>
                <p className='font-bold text-5xl dark:text-white'>52</p>
                <div className='flex justify-end items-center gap-1'>
                    <img className='h-1 w-2' src={downImage} alt="" />
                    <p className='downRed'>2%</p>
                </div>
            </div>
        </div>
        <div className='rounded-md top-card p-8 space-y-4 dark:bg-gray-800'>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-color  dark:text-gray-400'>Likes</p>
                <img className='h-6' src={instagramImage} alt="" />
            </div>
            <div className='flex justify-between'>
                <p className='font-bold text-5xl dark:text-white'>5462</p>
                <div className='flex justify-end items-center gap-1'>
                    <img className='h-1 w-2' src={upImage} alt="" />
                    <p className='upGreen'>2257%</p>
                </div>
            </div>
        </div>
        <div className='rounded-md top-card p-8 space-y-4 dark:bg-gray-800'>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-color  dark:text-gray-400'>Profile Views</p>
                <img className='h-6' src={instagramImage} alt="" />
            </div>
            <div className='flex justify-between'>
                <p className='font-bold text-5xl dark:text-white'>52k</p>
                <div className='flex justify-end items-center gap-1'>
                    <img className='h-1 w-2' src={upImage} alt="" />
                    <p className='upGreen'>1375%</p>
                </div>
            </div>
        </div>
        <div className='rounded-md top-card p-8 space-y-4 dark:bg-gray-800'>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-color  dark:text-gray-400'>Retweets</p>
                <img className='h-6' src={twitterImage} alt="" />
            </div>
            <div className='flex justify-between'>
                <p className='font-bold text-5xl dark:text-white'>117</p>
                <div className='flex justify-end items-center gap-1'>
                    <img className='h-1 w-2' src={upImage} alt="" />
                    <p className='upGreen'>303%</p>
                </div>
            </div>
        </div>
        <div className='rounded-md top-card p-8 space-y-4 dark:bg-gray-800'>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-color  dark:text-gray-400'>Likes</p>
                <img className='h-6' src={twitterImage} alt="" />
            </div>
            <div className='flex justify-between'>
                <p className='font-bold text-5xl dark:text-white'>507</p>
                <div className='flex justify-end items-center gap-1'>
                    <img className='h-1 w-2' src={upImage} alt="" />
                    <p className='upGreen'>553%</p>
                </div>
            </div>
        </div>
        <div className='rounded-md top-card p-8 space-y-4 dark:bg-gray-800'>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-color  dark:text-gray-400'>Likes</p>
                <img className='h-6' src={youtubeImage} alt="" />
            </div>
            <div className='flex justify-between'>
                <p className='font-bold text-5xl dark:text-white'>107</p>
                <div className='flex justify-end items-center gap-1'>
                    <img className='h-1 w-2' src={downImage} alt="" />
                    <p className='downRed'>19%</p>
                </div>
            </div>
        </div>
        <div className='rounded-md top-card p-8 space-y-4 dark:bg-gray-800'>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-color  dark:text-gray-400'>Total Views</p>
                <img className='h-6' src={youtubeImage} alt="" />
            </div>
            <div className='flex justify-between'>
                <p className='font-bold text-5xl dark:text-white'>1407</p>
                <div className='flex justify-end items-center gap-1'>
                    <img className='h-1 w-2' src={downImage} alt="" />
                    <p className='downRed'>12%</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    
  )
}

export default DashboardComponent