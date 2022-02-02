#!/bin/bash

if [ -d "dist" ]; then
  if [ -d "/home/gitlab-runner/heyui-admin" ]; then
    rm -rf /home/gitlab-runner/heyui-admin
  fi
  cp -rf dist /home/gitlab-runner/heyui-admin
else
  echo "dist不存在"
fi