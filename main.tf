terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
      version = "~> 2.13.0"
    }
  }
}

provider "docker" {
  host    = "npipe:////.//pipe//docker_engine"
}


resource "docker_container" "map_app_deliverable" {
  image = "mapappdeliverable:latest"
  name  = "mapappdeliverable"
  restart = "always"
  interactive = true
  volumes {
    container_path  = "/myapp"
    # replace the host_path with full path for your project directory starting from root directory /
    host_path = "/app" 
    read_only = false
  }
  ports {
    internal = 3001
    external = 3000
  }
}