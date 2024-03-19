#!/bin/bash

set -e

# env variables
REACT_APP_API_BASE_URL="${REACT_APP_API_BASE_URL}"
REACT_APP_MIRA_API_URL="${REACT_APP_MIRA_API_URL}"
REACT_APP_FRONTEND_URL="${REACT_APP_FRONTEND_URL}"
REACT_APP_DOCS_URL="${REACT_APP_DOCS_URL}"
REACT_APP_BLOG_URL="${REACT_APP_BLOG_URL}"
REACT_APP_CRANE_CLOUD_STATUS="${REACT_APP_CRANE_CLOUD_STATUS}"
REACT_APP_MIRA_DOCS_URL="${REACT_APP_MIRA_DOCS_URL}"


function create_env_file
{
    echo REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL >> .env
    echo REACT_APP_MIRA_API_URL=$REACT_APP_MIRA_API_URL >> .env
    echo REACT_APP_FRONTEND_URL=$REACT_APP_FRONTEND_URL >> .env
    echo REACT_APP_DOCS_URL=$REACT_APP_DOCS_URL >> .env
    echo REACT_APP_BLOG_URL=$REACT_APP_BLOG_URL >> .env
    echo REACT_APP_CRANE_CLOUD_STATUS=$REACT_APP_CRANE_CLOUD_STATUS >> .env
    echo REACT_APP_MIRA_DOCS_URL=$REACT_APP_MIRA_DOCS_URL >> .env
}


function run
{
    create_env_file
}

run