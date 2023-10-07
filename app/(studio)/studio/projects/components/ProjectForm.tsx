'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Project, ProjectStatus } from '@/types';
import { convertDateToString } from '@/utils';
import { MOVIE_CATEGORIES, MOVIE_GENRES, MOVIE_TAGS, PROJECT_STATUS } from '@/constants';
import { PiInfoBold, PiPlusBold, PiXBold } from 'react-icons/pi';

interface Props {
  defaultProject?: Project;
}

const isSubmittable = (projectStatus?: ProjectStatus): boolean => {
  switch (projectStatus) {
    // case PROJECT_STATUS.DRAFT:
    //   return true
    case PROJECT_STATUS.PENDING_APPROVAL:
      return false;
    // case PROJECT_STATUS.REVISION_REQUIRED:
    //   return true
    case PROJECT_STATUS.APPROVED:
      return false;
    case PROJECT_STATUS.RUNNING:
      return false;
    case PROJECT_STATUS.FINISHED:
      return false;
    default:
      return true;
  }
};

const isAbleToSave = (projectStatus?: ProjectStatus): boolean => {
  switch (projectStatus) {
    // case PROJECT_STATUS.DRAFT:
    //   return true
    case PROJECT_STATUS.PENDING_APPROVAL:
      return false;
    // case PROJECT_STATUS.REVISION_REQUIRED:
    //   return true
    case PROJECT_STATUS.APPROVED:
      return false;
    case PROJECT_STATUS.RUNNING:
      return false;
    case PROJECT_STATUS.FINISHED:
      return false;
    default:
      return true;
  }
};

const isAbleToLaunch = (projectStatus?: ProjectStatus): boolean => {
  switch (projectStatus) {
    // case PROJECT_STATUS.DRAFT:
    //   return false
    // case PROJECT_STATUS.PENDING_APPROVAL:
    //   return false
    // case PROJECT_STATUS.REVISION_REQUIRED:
    //   return false
    case PROJECT_STATUS.APPROVED:
      return true;
    // case PROJECT_STATUS.RUNNING:
    //   return false
    // case PROJECT_STATUS.FINISHED:
    //   return false
    default:
      return false;
  }
};

const isEditable = (projectStatus?: ProjectStatus): boolean => {
  switch (projectStatus) {
    // case PROJECT_STATUS.DRAFT:
    //   return true
    case PROJECT_STATUS.PENDING_APPROVAL:
      return false;
    // case PROJECT_STATUS.REVISION_REQUIRED:
    //   return true
    case PROJECT_STATUS.APPROVED:
      return false;
    case PROJECT_STATUS.RUNNING:
      return false;
    case PROJECT_STATUS.FINISHED:
      return false;
    default:
      return true;
  }
};

const getSubmissionFee = (fundingGoal?: number): number => {
  if (!fundingGoal) return 0;
  const rate = 0.01;
  return fundingGoal * rate;
};

const ProjectForm: FC<Props> = ({ defaultProject }) => {
  const productionStartAt = defaultProject?.productionStartAt
    ? convertDateToString(defaultProject.productionStartAt)
    : '';
  const releaseDate = defaultProject?.movie?.releaseDate ? convertDateToString(defaultProject.movie.releaseDate) : '';

  return (
    <>
      <div className="sticky top-4 flex justify-end w-full h-10 opacity-100">
        <div className="flex items-center gap-2">
          <button className={`btn ${isAbleToSave(defaultProject?.status) ? 'block' : 'hidden'}`}>Save</button>
          <button
            disabled={!isSubmittable(defaultProject?.status)}
            className={`btn btn-primary ${isSubmittable(defaultProject?.status) ? 'block' : 'hidden'}`}
          >
            Submit
          </button>
          <button className={`btn btn-primary ${isAbleToLaunch(defaultProject?.status) ? 'block' : 'hidden'}`}>
            Plan to Launch
          </button>
        </div>
      </div>

      <form className="w-3/4">
        <div className="grid grid-cols-1 gap-3">
          {/* Projects */}
          <section className="space-y-5">
            <h1 className="font-bold text-xl">1.Project</h1>
            {/* Project title */}
            <div>
              <label className="label">
                <span className="label-text">Project title</span>
              </label>
              <input
                type="text"
                defaultValue={defaultProject?.name || ''}
                disabled={!isEditable(defaultProject?.status)}
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* Project description */}
            <div>
              <label className="label">
                <span className="label-text">Project description</span>
              </label>
              <textarea
                defaultValue={defaultProject?.description || ''}
                disabled={!isEditable(defaultProject?.status)}
                className="textarea textarea-bordered w-full"
                placeholder="Share your project overview and vision of the movie"
                required
              />
            </div>
            {/* EyeCatch image */}
            <div>
              <label className="label">
                <span className="label-text">Eye catch image</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                disabled={!isEditable(defaultProject?.status)}
                required
              />
            </div>
            {/* Pitch video */}
            <div>
              <label className="label">
                <span className="label-text">Pitch video</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                disabled={!isEditable(defaultProject?.status)}
                required
              />
            </div>

            <br />

            <h2>Product Schedule</h2>
            {/* Production start date */}
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Production start date</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full max-w-xs"
                defaultValue={productionStartAt}
                disabled={!isEditable(defaultProject?.status)}
                required
              />
            </div>
            <br />
            {/* Timeline */}
            <div className="w-full">
              <label className="label">
                <span className="label-text">Production timeline</span>
              </label>
              <ul className="steps steps-vertical w-full">
                {defaultProject?.productionSchedule.map((schedule, i) => (
                  <li key={i} className="step w-full">
                    <div className="flex gap-2 w-full">
                      <input
                        type="text"
                        defaultValue={schedule.name}
                        disabled={!isEditable(defaultProject?.status)}
                        className="input input-bordered w-full"
                        required
                      />
                      <input
                        type="date"
                        className="input input-bordered w-full max-w-xs"
                        defaultValue={convertDateToString(schedule.date)}
                        disabled={!isEditable(defaultProject?.status)}
                        required
                      />
                      <button type="button" className="btn btn-ghost" disabled={!isEditable(defaultProject?.status)}>
                        <PiXBold size={12} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="btn btn-ghost flex items-center gap-1"
                  disabled={!isEditable(defaultProject?.status)}
                >
                  <PiPlusBold size={12} />
                  ADD Schedule
                </button>
              </div>
            </div>
          </section>

          <br />
          <hr className="text-base-200" />
          <br />

          {/* Movies */}
          <section className="space-y-5">
            <h1 className="font-bold text-xl">2.Movie</h1>
            <div>
              <label className="label">
                <span className="label-text">Story</span>
              </label>
              <textarea
                defaultValue={defaultProject?.movie?.story}
                disabled={!isEditable(defaultProject?.status)}
                className="textarea textarea-bordered w-full"
                required
              />
            </div>

            {/* CATEGORY & GENRE */}
            <div className="flex gap-2 w-full">
              {/* Category */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select className="select select-bordered" disabled={!isEditable(defaultProject?.status)}>
                  {MOVIE_CATEGORIES.map((category) => (
                    <option key={category.value}>{category.label}</option>
                  ))}
                </select>
              </div>
              {/* Genre */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <select className="select select-bordered" disabled={!isEditable(defaultProject?.status)}>
                  {MOVIE_GENRES.map((genre) => (
                    <option key={genre.value}>{genre.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* RUNTIME & RELEASE DATE */}
            <div className="flex gap-2 w-full">
              {/* Runtime */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Release date</span>
                </label>
                <input
                  // label="Run time (min)"
                  type="number"
                  defaultValue={defaultProject?.movie?.runtime || 0}
                  disabled={!isEditable(defaultProject?.status)}
                  className="input input-bordered w-full"
                  required
                  min={1}
                />
              </div>
              {/* Release date */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Release date</span>
                </label>
                <input
                  type="date"
                  defaultValue={releaseDate}
                  disabled={!isEditable(defaultProject?.status)}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Countries of origin & Language */}
            <div className="flex gap-2 w-full">
              {/* Countries of origin */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Countries of origin</span>
                </label>
                <select className="select select-bordered" disabled={!isEditable(defaultProject?.status)}>
                  <option key={'usa'}>USA</option>
                  <option key={'canada'}>Canada</option>
                  <option key={'india'}>India</option>
                  <option key={'china'}>China</option>
                  <option key={'spain'}>Spain</option>
                  <option key={'france'}>France</option>
                </select>
              </div>
              {/* Genre */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Language</span>
                </label>
                <select className="select select-bordered" disabled={!isEditable(defaultProject?.status)}>
                  <option key={'english'}>English</option>
                  <option key={'mandarin'}>Mandarin</option>
                  <option key={'hindi'}>Hindi</option>
                  <option key={'spanish'}>Spanish</option>
                  <option key={'french'}>French</option>
                </select>
              </div>
            </div>

            {/* Filming Locations & Production Companies */}
            <div className="flex gap-2 w-full">
              {/* Filming Locations */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Filming Locations</span>
                </label>
                <input
                  type="text"
                  defaultValue={defaultProject?.movie?.filmingLocations[0] || ''}
                  disabled={!isEditable(defaultProject?.status)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              {/* Production companies */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Production Companies</span>
                </label>
                <input
                  type="text"
                  defaultValue={defaultProject?.movie?.productionCompanies[0]}
                  disabled={!isEditable(defaultProject?.status)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            {/* Tags */}
            <h2 className="font-bold">Tags</h2>
            <ul className="grid grid-cols-3">
              {MOVIE_TAGS.map(({ value, label }) => {
                const isSelected = defaultProject?.movie?.tags.some((tag) => tag === value);
                return (
                  <li key={value} className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="checkbox"
                        defaultChecked={isSelected}
                        disabled={!isEditable(defaultProject?.status)}
                      />
                      <span className="label-text">{label}</span>
                    </label>
                  </li>
                );
              })}
            </ul>

            {/* Posters */}
            <h2 className="font-bold">Posters</h2>
            <div className="flex gap-2 min-h-[200px]">
              {/* Poster (vertical, 4:3) */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Poster (vertical, 4:3)</span>
                </label>
                <input
                  type="file"
                  disabled={!isEditable(defaultProject?.status)}
                  className="file-input file-input-bordered w-full"
                  required
                />
              </div>
              {/* Poster (square, 1:1) */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Poster (square, 1:1)</span>
                </label>
                <input
                  type="file"
                  disabled={!isEditable(defaultProject?.status)}
                  className="file-input file-input-bordered w-full"
                  required
                />
              </div>
              {/* Poster (horizontal, 16:9) */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Poster (horizontal, 16:9)</span>
                </label>
                <input
                  type="file"
                  disabled={!isEditable(defaultProject?.status)}
                  className="file-input file-input-bordered w-full"
                  required
                />
              </div>
            </div>

            {/* Videos */}
            <h2 className="font-bold">Videos</h2>
            <div className="flex gap-2 min-h-[200px]">
              {/* Trailer */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Trailer</span>
                </label>
                <input
                  type="file"
                  disabled={!isEditable(defaultProject?.status)}
                  className="file-input file-input-bordered w-full"
                  required
                />
              </div>
              {/* Video1 */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Video1</span>
                </label>
                <input
                  type="file"
                  disabled={!isEditable(defaultProject?.status)}
                  className="file-input file-input-bordered w-full"
                  required
                />
              </div>
              {/* Video2 */}
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Video2</span>
                </label>
                <input
                  type="file"
                  disabled={!isEditable(defaultProject?.status)}
                  className="file-input file-input-bordered w-full"
                  required
                />
              </div>
            </div>

            {/* Crews */}
            <h2 className="font-bold">Crews</h2>
            <div className="w-full space-y-2">
              <ul className="steps steps-vertical w-full space-y-1">
                {defaultProject?.movie?.crews.map((crew) => (
                  <li key={crew.id} className="flex gap-2 p-1">
                    <input
                      type="text"
                      defaultValue={crew.name}
                      disabled={!isEditable(defaultProject?.status)}
                      className="input input-bordered"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="text"
                      defaultValue={crew.credit || ''}
                      className="input input-bordered w-full"
                      disabled={!isEditable(defaultProject?.status)}
                      placeholder="Credit"
                      required
                    />
                    <input
                      type="text"
                      defaultValue={crew.socialLink || ''}
                      className="input input-bordered w-full"
                      disabled={!isEditable(defaultProject?.status)}
                      placeholder="Social link"
                    />
                    <button type="button" className="btn btn-ghost" disabled={!isEditable(defaultProject?.status)}>
                      <PiXBold size={12} />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="btn btn-ghost flex items-center gap-x-1"
                  disabled={!isEditable(defaultProject?.status)}
                >
                  <PiPlusBold size={12} />
                  ADD Crew
                </button>
              </div>
            </div>

            {/* Casts */}
            <h2 className="font-bold">Casts</h2>
            <div className="w-full space-y-2">
              <ul className="steps steps-vertical w-full space-y-1">
                {defaultProject?.movie?.casts.map((cast) => (
                  <li key={cast.id} className="flex gap-2 p-1">
                    <input
                      type="text"
                      defaultValue={cast.name}
                      disabled={!isEditable(defaultProject?.status)}
                      className="input input-bordered"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="text"
                      defaultValue={cast.character || ''}
                      className="input input-bordered w-full"
                      disabled={!isEditable(defaultProject?.status)}
                      placeholder="Character"
                      required
                    />
                    <input
                      type="text"
                      defaultValue={cast.socialLink || ''}
                      className="input input-bordered w-full"
                      disabled={!isEditable(defaultProject?.status)}
                      placeholder="Social link"
                    />
                    <button type="button" className="btn btn-ghost" disabled={!isEditable(defaultProject?.status)}>
                      <PiXBold size={12} />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="btn btn-ghost flex items-center gap-x-1"
                  disabled={!isEditable(defaultProject?.status)}
                >
                  <PiPlusBold size={12} />
                  ADD Cast
                </button>
              </div>
            </div>
          </section>

          <br />
          <hr className="text-base-200" />
          <br />

          {/* Funding */}
          <section className="space-y-5">
            <h1 className="font-bold text-xl">3.Funding</h1>
            <div className="flex gap-2">
              <div className="w-1/2 space-y-5">
                {/* Funding Goal */}
                <div>
                  <label className="label">
                    <span className="label-text">Funding Goal ($USDC)</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={defaultProject?.fundingGoal}
                    min={1}
                    disabled={!isEditable(defaultProject?.status)}
                    className="input input-bordered w-full"
                    placeholder="$10,000"
                    required
                  />
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-sm">
                      <p className="font-bold">Calculated Submission Fee</p>
                      <div
                        className="tooltip"
                        data-tip={`
                      When you submit this project, submission fee will be charged.
                      Your submission fee will scale with your production budget.
                      (Please specify the exact budget needed in order to complete this project.)
                      `}
                      >
                        <div className="cursor-pointer">
                          <PiInfoBold size={16} />
                        </div>
                      </div>
                    </div>
                    <p className="font-bold">${getSubmissionFee(defaultProject?.fundingGoal)}</p>
                  </div>
                </div>

                {/* Running Days */}
                <div>
                  <label className="label">
                    <span className="label-text">Running Days (Up to 90)</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={defaultProject?.runningDays}
                    min={1}
                    max={60}
                    disabled={!isEditable(defaultProject?.status)}
                    className="input input-bordered w-full"
                    placeholder="1-90 days (Recommended 60days)"
                    required
                  />
                </div>
              </div>
            </div>
            <p className="font-bold">Rewards</p>
            {defaultProject?.reward.map((reward, i) => (
              <div key={i} className="space-y-5">
                <p className="font-bold">Tier: {reward.tier}</p>
                <div className="flex gap-2">
                  <div className="w-1/2 space-y-4">
                    <div>
                      <label className="label">
                        <span className="label-text">Title</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={reward.title}
                        required
                        disabled={!isEditable(defaultProject?.status)}
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text">Description</span>
                      </label>
                      <textarea
                        defaultValue={reward.description}
                        required
                        disabled={!isEditable(defaultProject?.status)}
                        className="textarea textarea-bordered w-full"
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text">Unit price ($USDC)</span>
                      </label>
                      <input
                        type="number"
                        defaultValue={reward.unitPrice}
                        min={1}
                        required
                        disabled={!isEditable(defaultProject?.status)}
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                  {/* NFT Preview */}
                  <div className="flex justify-center  w-1/2">
                    <Image
                      src={defaultProject?.eyeCatchUrl!}
                      width={200}
                      height={200}
                      className={`object-fit border-4 rounded-md  ${
                        reward.tier === 1
                          ? 'border-yellow-300'
                          : reward.tier === 2
                          ? 'border-blue-300'
                          : reward.tier === 3
                          ? 'border-orange-700'
                          : ''
                      }`}
                      alt={'nft preview'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </form>
      <br />
      <br />
    </>
  );
};

export default ProjectForm;
