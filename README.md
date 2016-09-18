# HORIZON

Neural-Talk for Automatic Alt-text for Visually Impaired Users with a Chrome Extension

---
![Horizon Logo](https://raw.githubusercontent.com/nicholaslocascio/horizon/master/extension/horizonlogo.png)
---

## Usage

### Neural Talk
 * Neural Talk is a deep learning image captioning system.
 * We use a docker image of neural talk that exposes a REST API.
 * Run the image with `docker run -e "modelPath=/mounted/model/model_id1-501-1448236541.t7_cpu.t7" --name neuraltalk2-web -p 5000:5000 -v ~/MIT/MEng/horizon:/mounted jacopofar/neuraltalk2-web:latest`
 * Download `model_id1-501-1448236541.t7_cpu.t7` in /model from http://cs.stanford.edu/people/karpathy/neuraltalk2/checkpoint_v1_cpu.zip


#### Chrome Extension
 * Chrome Extension is located in /web
 * Install it via the extensions tab in Google Chrome
 * The extension only captions the top 2 images in a page, but this can be adjusted in `content.js`
