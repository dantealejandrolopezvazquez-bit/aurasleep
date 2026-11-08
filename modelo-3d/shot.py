import sys, json, pathlib
HTML = (pathlib.Path(__file__).parent / "aurasleep-3d.html").resolve().as_uri()
from playwright.sync_api import sync_playwright
jobs=json.loads(sys.argv[1])
with sync_playwright() as p:
    b=p.chromium.launch(args=["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
    for j in jobs:
        w,h=j.get('w',1600),j.get('h',1000)
        pg=b.new_page(viewport={'width':w,'height':h},device_scale_factor=j.get('dpr',1.5))
        errs=[]; pg.on('console',lambda m: errs.append(m.text) if m.type=='error' else None); pg.on('pageerror',lambda e: errs.append(str(e)))
        url=HTML+j.get('q','')
        pg.goto(url); pg.wait_for_function("window.__ready===true",timeout=60000); pg.wait_for_timeout(j.get('wait',1500))
        pg.screenshot(path=j['out'],omit_background=j.get('nobg',False))
        print(j['out'],errs[:3]); pg.close()
    b.close()
