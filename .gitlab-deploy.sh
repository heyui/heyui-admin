#!/bin/bash

if [ -d "dist" ]; then
  if [ -d "/home/gitlab-runner/heyui-demo" ]; then
    rm -rf /home/gitlab-runner/heyui-demo
  fi
  cp -rf dist /home/gitlab-runner/heyui-demo
else
  echo "dist不存在"
fi