// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dGsUhjZME7GZHL9mJLmwh9
// Component: ZH_y0uWWc-
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: -YA3oXbgpP1/component
import { DataFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: ae7V86eNoXA/codeComponent
import Slider from "react-slick"; // plasmic-import: HOQUyOpClJ/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_hello_world_project.module.css"; // plasmic-import: dGsUhjZME7GZHL9mJLmwh9/projectcss
import sty from "./PlasmicAbout.module.css"; // plasmic-import: ZH_y0uWWc-/css

export const PlasmicAbout__VariantProps = new Array();

export const PlasmicAbout__ArgProps = new Array();

function PlasmicAbout__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox___2PrWb)}>
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
                color={"blue"}
                link={`/Homepage`}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fxQc8
                  )}
                >
                  {"Back"}
                </div>
              </Button>
            </div>
          ) : null}

          <DataFetcher
            data-plasmic-name={"httpApiFetcher"}
            data-plasmic-override={overrides.httpApiFetcher}
            className={classNames("__wab_instance", sty.httpApiFetcher)}
            dataName={"fetchedData"}
            errorDisplay={
              <ph.DataCtxReader>
                {$ctx =>
                  (() => {
                    try {
                      return undefined;
                    } catch (e) {
                      if (e instanceof TypeError) {
                        return "Error fetching data";
                      }
                      throw e;
                    }
                  })()
                }
              </ph.DataCtxReader>
            }
            headers={{
              "Content-Type": "application/json",
              Accept: "application/json"
            }}
            loadingDisplay={
              <ph.DataCtxReader>{$ctx => "Loading..."}</ph.DataCtxReader>
            }
            method={"GET"}
            noLayout={false}
            url={(() => {
              try {
                return "https://dummyjson.com/products/" + $ctx.params.id;
              } catch (e) {
                if (e instanceof TypeError) {
                  return "";
                }
                throw e;
              }
            })()}
          >
            <ph.DataCtxReader>
              {$ctx =>
                true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__iEk9H)}
                  >
                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___6LPwt
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__woEfJ
                          )}
                        >
                          {(() => {
                            try {
                              return $ctx.fetchedData.title;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "Enter some text";
                              }
                              throw e;
                            }
                          })()}
                        </div>

                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__z1G0N)}
                          displayHeight={"267px"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"100%"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={"251px"}
                          loading={"lazy"}
                          src={(() => {
                            try {
                              return $ctx.fetchedData.thumbnail;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                        />

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___6Tafe
                          )}
                        >
                          {(() => {
                            try {
                              return $ctx.fetchedData.description;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "Enter some text";
                              }
                              throw e;
                            }
                          })()}
                        </div>

                        {true ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__enmgD
                            )}
                          >
                            <Slider
                              data-plasmic-name={"slider"}
                              data-plasmic-override={overrides.slider}
                              adaptiveHeight={false}
                              autoplay={true}
                              autoplaySpeed={2000}
                              centerMode={true}
                              centerPadding={"0"}
                              className={classNames(
                                "__wab_instance",
                                sty.slider
                              )}
                              dots={true}
                              focusOnSelect={true}
                              pauseOnHover={false}
                              swipe={false}
                              touchMove={false}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData.images;
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return [];
                                  }
                                  throw e;
                                }
                              })().map((currentItem, currentIndex) => (
                                <p.PlasmicImg
                                  alt={""}
                                  className={classNames(sty.img__agxbF)}
                                  displayHeight={"745px"}
                                  displayMaxHeight={"none"}
                                  displayMaxWidth={"100%"}
                                  displayMinHeight={"0"}
                                  displayMinWidth={"0"}
                                  displayWidth={"100px"}
                                  key={currentIndex}
                                  src={(() => {
                                    try {
                                      return currentItem;
                                    } catch (e) {
                                      if (e instanceof TypeError) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()}
                                />
                              ))}
                            </Slider>
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                ) : null
              }
            </ph.DataCtxReader>
          </DataFetcher>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "button", "httpApiFetcher", "slider"],
  button: ["button"],
  httpApiFetcher: ["httpApiFetcher", "slider"],
  slider: ["slider"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAbout__ArgProps,
          internalVariantPropNames: PlasmicAbout__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAbout";
  } else {
    func.displayName = `PlasmicAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicAbout = Object.assign(
  // Top-level PlasmicAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    httpApiFetcher: makeNodeComponent("httpApiFetcher"),
    slider: makeNodeComponent("slider"),
    // Metadata about props expected for PlasmicAbout
    internalVariantProps: PlasmicAbout__VariantProps,
    internalArgProps: PlasmicAbout__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAbout;
/* prettier-ignore-end */
