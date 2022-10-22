import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
   const categoryNews = useLoaderData();
    return (
        <div>
            <h5>This category has {categoryNews.length}</h5>
            {
                categoryNews.map(news=><NewsSummaryCard key={news._id} news={news}>

                </NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;